from django.db import models

# Create your models here.

class TradeInfo(models.Model):
    trade_id = models.CharField("Trade ID", max_length=16, primary_key=True)    
    party1 = models.CharField('Party A', max_length=16)
    party2 = models.CharField('Party B', max_length=16)
    prod_class = models.CharField(max_length=16)
    prod_type =models.CharField(max_length=16)    
    trade_dt = models.DateField('Trade Date')
    input_dt = models.DateField(auto_now_add = True)
    
    def __str__(self):
        return self.trade_id
