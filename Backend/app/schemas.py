from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class LeadCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    phone: str = Field(pattern=r"^[6-9]\d{9}$")
    email: EmailStr
    interest: Optional[str] = None
    source: Optional[str] = None
    message: Optional[str] = None