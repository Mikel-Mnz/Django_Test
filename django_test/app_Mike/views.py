from django.http import HttpResponse
from django.template import loader

# Create your views here.

def appMike(request):
    template = loader.get_template('indexMike.html')
    return HttpResponse(template.render())