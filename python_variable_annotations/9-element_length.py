#!/usr/bin/env python3
"""Task 9"""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Task 9"""
    return [(i, len(i)) for i in lst]
