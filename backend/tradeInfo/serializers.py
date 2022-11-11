from rest_framework import serializers
from .models import TradeInfo

class TradeInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TradeInfo
        fields = ('trade_id','party1', 'party2', 'prod_class', 'prod_type', 'trade_dt', 'input_dt')