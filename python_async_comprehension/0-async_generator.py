#!/usr/bin/env python3
"""Task 0"""
from random import random
from typing import Generator
import asyncio


async def async_generator() -> Generator[float, None]:
    """Task 0"""
    for x in range(10):
        await asyncio.sleep(1)
        yield random() * 10
