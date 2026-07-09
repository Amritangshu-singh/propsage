from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from app.database import Base


class Lead(Base):

    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100))

    phone = Column(String(20))

    email = Column(String(150))

    interest = Column(String(100))

    source = Column(String(100))

    message = Column(String(500))


    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )