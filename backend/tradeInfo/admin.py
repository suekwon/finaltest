from django.contrib import admin

# Register your models here.
from .models import TradeInfo

class TradeInfoAdmin(admin.ModelAdmin):
    list_display = ('trade_id','party1', 'party2', 'prod_class', 'prod_type', 'trade_dt', 'input_dt')

admin.site.register(TradeInfo, TradeInfoAdmin)