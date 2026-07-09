from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import inspect
from sqlalchemy import text

from app.database import Base
from app.database import engine
from app.routes.leads import router

Base.metadata.create_all(bind=engine)


def ensure_lead_columns():
    inspector = inspect(engine)

    if "leads" not in inspector.get_table_names():
        return

    columns = {column["name"] for column in inspector.get_columns("leads")}

    with engine.begin() as connection:
        if "source" not in columns:
            connection.execute(text("ALTER TABLE leads ADD COLUMN source VARCHAR(100)"))

        if "message" not in columns:
            connection.execute(text("ALTER TABLE leads ADD COLUMN message VARCHAR(500)"))


ensure_lead_columns()

app = FastAPI()

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)

app.include_router(router)

@app.get("/")
def home():
    return {
        "message": "POSCH Backend is running 🚀"
    }