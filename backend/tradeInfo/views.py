from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TradeInfoSerializer
from .models import TradeInfo


# Create your views here.

class TradeInfoView(viewsets.ModelViewSet):
    serializer_class = TradeInfoSerializer
    queryset = TradeInfo.objects.all().order_by('prod_class')
