from flask import Blueprint, render_template
from flask_login import login_required, current_user

bp = Blueprint('orders', __name__, url_prefix='')


@bp.route('/')
@login_required
def index():
    return render_template('orders.html', current_user=current_user)
