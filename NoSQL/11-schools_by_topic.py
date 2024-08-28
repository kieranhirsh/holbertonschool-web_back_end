#!/usr/bin/env python3
"""task 11"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
	"""task 11"""
	return list(mongo_collection.find({"topics": topic}))
