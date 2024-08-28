#!/usr/bin/env python3
"""task 12"""
from pymongo import MongoClient

if __name__ == "__main__":
    """task 12"""
    client = MongoClient("mongodb://localhost:27017/")
    collection = client.logs.nginx

    methods = {
        "GET": 0,
        "POST": 0,
        "PUT": 0,
        "PATCH": 0,
        "DELETE": 0
    }

    all_docs = collection.count_documents({})
    methods["GET"] = collection.count_documents({"method": "GET"})
    methods["POST"] = collection.count_documents({"method": "POST"})
    methods["PUT"] = collection.count_documents({"method": "PUT"})
    methods["PATCH"] = collection.count_documents({"method": "PATCH"})
    methods["DELETE"] = collection.count_documents({"method": "DELETE"})
    status = collection.count_documents({"method": "GET", "path": "/status"})

    print("{} logs".format(all_docs))
    print("Methods:")
    for k, v in methods.items():
        print("\tmethod {}: {}".format(k, v))
    print("{} status check".format(status))