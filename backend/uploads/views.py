import json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
# from .forms import DocumentForm
from rest_framework import viewsets

from .serializers import UploadFileSerializer
from .models import UploadFile

# Create your views here.

class model_form_upload(viewsets.ModelViewSet):
    serializer_class = UploadFileSerializer
    queryset = UploadFile.objects.all()

# @method_decorator(csrf_exempt, name= "dispatch")
# def model_form_upload(request):
#     if request.method == "POST":
#         form = DocumentForm(request.Post, request.FILES)    
#         if form.is_valid():
#             form.save()
#             return HttpResponse(json.dumps({"status": "Success"}))
#         else:
#             return HttpResponse(json.dumps({"status": "Failed"}))
