#!/usr/bin/env python3
"""task 8"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """task 8"""
    documents = []

    for x in mongo_collection.find():
        documents.append(x)

    return documents
