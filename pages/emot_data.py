import numpy as np
import pandas as pd
import os
from tqdm import tqdm


def stringToInt(str):
    n = 0
    for i in s:
        n = n*10 + ord(i) - ord("0")
    return n 