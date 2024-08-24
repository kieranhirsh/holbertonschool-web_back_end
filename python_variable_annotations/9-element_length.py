#!/usr/bin/env python3
"""Task 9"""
from typing import Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> Tuple[Iterable[Sequence], int]:
    """Task 9"""
    return [(i, len(i)) for i in lst]
