#!/usr/bin/env python3
"""Task 8"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Task 8"""

    def mult(v: float) -> float:
        return v * multiplier

    return mult
