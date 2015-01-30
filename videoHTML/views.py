from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.template import RequestContext

from django.core.context_processors import csrf

def indexView(request):
	if request.method == "GET":
		response = render_to_response("index.html")
		response['HTTP_PRAGMA'] = 'NO-CACHE'
		response['HTTP_CACHE_CONTROL'] = 'NO-CACHE'
		response['EXPIRES'] = '0'
		return response

'''
I'm not sure which meta tags you're talking about, but normally these tags would "expire" a page, which you can put in your templates.

  <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
  <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
  <META HTTP-EQUIV="EXPIRES" CONTENT="0">
Hope this helps.
'''