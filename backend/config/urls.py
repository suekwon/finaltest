"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
# from tradeInfo.views import TradeInfoView
from tradeInfo import views




router = routers.DefaultRouter()
# router.register("tradeinfo", TradeInfoView, basename='tradeinfoview')
router.register(r'tradeinfo', views.TradeInfoView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    # path('tradeinfo/', views.trade_list),
    # path('tradeinfo/<int:pk>', views.trade_detail),
    # path('upload/', include(router.urls)),
]
