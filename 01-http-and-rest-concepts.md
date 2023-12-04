# HTTP: HyperText Transfer Protocol

Protocolo de transferência de hipertexto

## Requests: solicitações ou requisições

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

* Method
* Path
* Protocol version
* Headers
* Body

## Responses: respostas

```http
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html
```

* Protocol version
* Status code
* Headers
* Body

<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)

# REST: Representational State Transfer

Usa o protocolo HTTP Transferência de estado representacional

* Recursos
* URI (Uniform Resource Identifier)
    * Rotas (routes) ou endpoints
* Verbos HTTP
    * GET
    * POST
    * PUT
    * DELETE