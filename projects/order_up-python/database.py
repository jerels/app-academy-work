from dotenv import load_dotenv
load_dotenv()  # noqa
from app import app, db
from app.models import Employee, Menu, MenuItem, MenuItemType


with app.app_context():
    db.drop_all()
    db.create_all()

    employee = Employee(name='Margot', employee_number=1234,
                        password='password')

    dinner = Menu(name='Dinner')

    beverages = MenuItemType(name='Beverages')
    entrees = MenuItemType(name='Entrees')
    sides = MenuItemType(name='Sides')

    fries = MenuItem(name='French fries', price=3.50, type=sides, menus=dinner)
    drp = MenuItem(name='Dr. Pepper', price=1.0, type=beverages, menus=dinner)
    jambalaya = MenuItem(name='Jambalaya', price=21.98,
                         type=entrees, menus=dinner)

    db.session.add(employee)
    db.session.add(dinner)
    db.session.add(beverages)
    db.session.add(entrees)
    db.session.add(sides)
    db.session.add(fries)
    db.session.add(drp)
    db.session.add(jambalaya)
    db.session.commit()
