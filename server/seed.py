# server/seed.py

from app import app
from models import db, Movie

with app.app_context():
    # Reset the database
    db.drop_all()
    db.create_all()

    # Add some movies
    movies = [
        Movie(title="Inception", year=2010),
        Movie(title="The Dark Knight", year=2008),
        Movie(title="Interstellar", year=2014),
    ]

    db.session.add_all(movies)
    db.session.commit()

    print("✅ Database seeded with movies!")
