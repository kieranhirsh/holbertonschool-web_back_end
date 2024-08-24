#!/usr/bin/env python3
"""Task 7"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Task 7"""
    return (k, v * v)
