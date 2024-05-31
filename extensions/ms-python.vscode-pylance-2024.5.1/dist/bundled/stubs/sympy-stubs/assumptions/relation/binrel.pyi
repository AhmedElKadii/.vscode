from typing import Optional, Self
from sympy.assumptions import AppliedPredicate, Predicate
from sympy.core.basic import Basic
from sympy.core.logic import Not

__all__ = ["BinaryRelation", "AppliedBinaryRelation"]
class BinaryRelation(Predicate):
    is_reflexive: Optional[bool] = ...
    is_symmetric: Optional[bool] = ...
    def __call__(self, *args) -> AppliedBinaryRelation:
        ...
    
    @property
    def reversed(self) -> Self | None:
        ...
    
    @property
    def negated(self) -> None:
        ...
    
    def eval(self, args, assumptions=...) -> bool:
        ...
    


class AppliedBinaryRelation(AppliedPredicate):
    @property
    def lhs(self) -> Basic:
        ...
    
    @property
    def rhs(self) -> Basic:
        ...
    
    @property
    def reversed(self) -> Self:
        ...
    
    @property
    def reversedsign(self) -> Self:
        ...
    
    @property
    def negated(self) -> Not:
        ...
    
    def __bool__(self) -> bool:
        ...
    


