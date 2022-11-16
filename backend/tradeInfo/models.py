from django.db import models

# Create your models here.

class TradeInfo(models.Model):
    trade_id = models.CharField("id", max_length=16)    
    party1 = models.CharField('A', max_length=16)
    party2 = models.CharField('B', max_length=16)
    prod_class = models.CharField(max_length=16)
    prod_type =models.CharField(max_length=16)    
    trade_dt = models.DateField('Trade Date')
    input_dt = models.DateField(auto_now_add = True)
    
    def __str__(self):
        return self.trade_id
