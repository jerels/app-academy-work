from dotenv import load_dotenv
load_dotenv()  # noqa
from app import app, db
from app.models import (Employee,
                        Menu,
                        MenuItem,
                        MenuItemType,
                        Table)


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

    table1 = 1
    table2 = 2
    table3 = 3
    table4 = 4
    table5 = 5
    table6 = 6
    table7 = 7
    table8 = 8
    table9 = 9
    table10 = 10
    tables = [table1,
              table2,
              table3,
              table4,
              table5,
              table6,
              table7,
              table8,
              table9,
              table10]
    for table in tables:
        table = Table(number=table, capacity=4)
        db.session.add(table)

    db.session.add(employee)
    db.session.add(dinner)
    db.session.add(beverages)
    db.session.add(entrees)
    db.session.add(sides)
    db.session.add(fries)
    db.session.add(drp)
    db.session.add(jambalaya)
    db.session.commit()
