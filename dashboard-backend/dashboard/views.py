import os

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse, FileResponse
from django.utils import timezone
import datetime
import os
from django.http import HttpResponse
from django.template import loader

from .serializers import Dashboard, DashboardSerializer


@api_view(['GET', 'POST'])
def sample(request):
    return JsonResponse({"hi": "hello"}, safe=False, status=status.HTTP_200_OK)


def index(request, path=''):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())


def static(request, folder='', filename=''):
    print('static', folder, filename)
    template = loader.get_template('index.html')
    print(os.getcwd())
    return FileResponse(open(f'dashboard/templates/static/{folder}/{filename}', 'rb'))
    # return JsonResponse({"hi": "hello"}, safe=False, status=status.HTTP_200_OK)
    # return HttpResponse(template.render())


@api_view(['GET'])
def get_list(request):
    print(request.data)
    # serializer = DashboardSerializer(data={"name": "ragib", "telephone": "0001"})
    # if serializer.is_valid():
    #     serializer.save()
    #     print("entry saved")
    return Response({"msg": 'successful 2'},
                    status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def new_lead(request):
    print(request.data)
    if 'datum' in request.data:
        if request.data['datum'] == '':
            request.data['datum'] = None
    serializer = DashboardSerializer(data=request.data)
    if serializer.is_valid():
        instance = serializer.save()
        print("entry saved")
        # instance_serializer = DashboardSerializer(instance, data={})
        # if instance_serializer.is_valid():
            # return Response({"msg": "successful", 'id': instance.id}, status=status.HTTP_200_OK)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def get_leads(request):
    dashboard = Dashboard.objects.all()
    serializer = DashboardSerializer(dashboard, many=True)
    # print(serializer.data)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PUT'])
def update_lead_data(request):
    print(request.data)
    for elem in request.data:
        object = Dashboard.objects.filter(id=elem["id"]).first()
        serializer = DashboardSerializer(object, data=elem)

        if serializer.is_valid():
            serializer.save()
            print('update saved')

    return Response({"msg": "successful"}, status=status.HTTP_200_OK)
