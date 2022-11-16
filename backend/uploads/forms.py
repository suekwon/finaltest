from django.forms import ModelForm
from .models import UploadFile 

class DocumentForm(ModelForm):
    class Meta:
        model = UploadFile
        fields = ("cust_id","f_data")