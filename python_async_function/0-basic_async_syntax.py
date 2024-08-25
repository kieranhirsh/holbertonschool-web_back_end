#!/usr/bin/env python3
"""Task 0"""
from random import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Task 0"""
    delay = random() * max_delay
    await asyncio.sleep(delay)
    return delay