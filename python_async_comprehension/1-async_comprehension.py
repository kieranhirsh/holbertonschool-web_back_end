#!/usr/bin/env python3
"""Task 1"""
from typing import List

async_generator = __import__('0-async_generator').async_generator

async def async_comprehension() -> List[float]:
    """Task 1"""
    result = []
    async for i in async_generator():
        result.append(i)

    return result
