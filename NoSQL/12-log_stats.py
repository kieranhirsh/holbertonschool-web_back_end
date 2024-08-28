#!/usr/bin/env python3
"""task 12"""
from pymongo import MongoClient

if __name__ == "__main__":
    """task 12"""
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    methods = {
        "GET": 0,
        "POST": 0,
        "PUT": 0,
        "PATCH": 0,
        "DELETE": 0
    }
    
    status_count = 0
    for v in collection.find():
        if 'method' in v:
            if v['method'] in methods:
                methods[v['method']] = methods[v['method']] + 1

            if v['method'] == 'GET' and 'path' in v and v['path'] == '/status':
                status_count = status_count + 1

    print("{} logs".format(collection.count_documents({})))
    print("Methods:")
    for k, v in methods.items():
        print("\tmethod {}: {}".format(k, v))
    print("{} status check".format(status_count))