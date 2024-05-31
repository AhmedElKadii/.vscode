from typing import Any, Generator

class Compound:
    def __init__(self, op, args) -> None:
        ...
    
    def __eq__(self, other) -> bool:
        ...
    
    def __hash__(self) -> int:
        ...
    
    def __str__(self) -> str:
        ...
    


class Variable:
    def __init__(self, arg) -> None:
        ...
    
    def __eq__(self, other) -> bool:
        ...
    
    def __hash__(self) -> int:
        ...
    
    def __str__(self) -> str:
        ...
    


class CondVariable:
    def __init__(self, arg, valid) -> None:
        ...
    
    def __eq__(self, other) -> bool:
        ...
    
    def __hash__(self) -> int:
        ...
    
    def __str__(self) -> str:
        ...
    


def unify(x, y, s=..., **fns) -> Generator[Any | dict[Any, Any], Any, None]:
    ...

def unify_var(var, x, s, **fns) -> Generator[Any, Any, None]:
    ...

def occur_check(var, x) -> bool:
    ...

def assoc(d, key, val):
    ...

def is_args(x) -> bool:
    ...

def unpack(x) -> Compound:
    ...

def allcombinations(A, B, ordered) -> Generator[tuple[tuple[tuple[Any], ...], Any] | tuple[Any, tuple[tuple[Any], ...]], Any, None]:
    ...

def partition(it, part) -> Any:
    ...

def index(it, ind) -> Any:
    ...

