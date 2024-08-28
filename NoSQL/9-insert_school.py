#!/usr/bin/env python3
"""task 9"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """task 9"""
    return mongo_collection.insert_one(kwargs)
