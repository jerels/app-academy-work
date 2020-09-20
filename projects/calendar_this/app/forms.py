from os import name
from flask_wtf import FlaskForm
from wtforms import StringField, DateField, TimeField, TextAreaField, BooleanField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from wtforms.widgets.html5 import DateInput, TimeInput
from datetime import datetime

class CreateAppointmentForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    start_date = DateField('start_date', validators=[DataRequired()], widget=DateInput())
    start_time = TimeField('start_time', validators=[DataRequired()], widget=TimeInput())
    end_date = DateField('end_date', validators=[DataRequired()], widget=DateInput())
    end_time = TimeField('end_time', validators=[DataRequired()], widget=TimeInput())
    description = TextAreaField('description', validators=[DataRequired()])
    private = BooleanField('private?')
    submit = SubmitField('create appointment')

    def validate_end_date(form, field):
        end = datetime.combine(form.end_date.data, form.end_time.data)
        start = datetime.combine(form.start_date.data, form.start_time.data)

        if start >= end:
            raise ValidationError('Start must come before end!')
        if form.end_date.data != form.start_date.data:
            raise ValidationError('Start date and end date must be the same day!')
