from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends

from app.database import SessionLocal
from app.models import Lead
from app.schemas import LeadCreate

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/leads")

def create_lead(

    lead: LeadCreate,

    db: Session = Depends(get_db)

):

    newLead = Lead(

        name=lead.name,

        phone=lead.phone,

        email=lead.email,

        interest=lead.interest,

        source=lead.source,

        message=lead.message,

    )

    db.add(newLead)

    db.commit()

    db.refresh(newLead)

    return {

        "success": True,

        "message": "Lead Saved",

        "source": lead.source,

        "leadMessage": lead.message,

    }