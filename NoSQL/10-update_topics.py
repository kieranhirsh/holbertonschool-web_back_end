#!/usr/bin/env python3
"""task 10"""
from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
	"""task 10"""
	mongo_collection.update_many(
		{
			'name': name
		},
		{ '$set': {
					'topics': topics
				  }
		}
	)
