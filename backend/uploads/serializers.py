from rest_framework import serializers
from .models import UploadFile

class UploadFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadFile
        # fields = ('trade_id','party1', 'party2', 'prod_class', 'prod_type', 'trade_dt', 'input_dt')
        fields = ('__all__')