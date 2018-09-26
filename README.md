# NAME Service
Service description

## Service Prefix:
none || `/service-prefix`

## Service Suffix:
none || `/service-suffix`

## Current Version:
/v1

---
## Response Codes

+ **200** -- The request has succeeded.
+ **201** -- The request has been fulfilled and resulted in a new resource being created.
+ **204** -- The server has fulfilled the request but does not need to return an entity-body, and might want to return updated meta-information.
+ **304** -- The server hasn't modified the item.
+ **400** -- The request could not be understood by the server due to malformed syntax.
+ **401** -- The request requires user authentication.
+ **403** -- The server understood the request but refuses to authorize it.
+ **404** -- The server has not found anything matching the Request-URI.
+ **500** -- The server encountered an unexpected condition which prevented it from fulfilling the request.

---
### NAME Service Hosts

|Environment| Host |
|-|-|
qa | https://qa-name.domain.ext
staging | https://staging-name.domain.ext
production | https://name.domain.ext

---
***Example curl request***
```
curl -X GET 'https://name.domain.ext/service-NAME/api/v1/'
```

---
## Diagrams

## Status of Routes
![Not Started](./statics/not_started.png) Not started

![In Progress](./statics/in_progress.png) In progress (stub with readme requests and responses)

![Done](./statics/done.png) Deployed

<a name="routes_menu"></a>
# Menu
## API
### POST
* ![Done](statics/done_small.png) [POST /entity1](#post_entity1)
* ![Done](statics/in_progress_small.png) [POST /entity2](#post_entity2)
* ![Done](statics/not_started_small.png) [POST /entity3](#post_entity3)

### GET
* ![Done](statics/done_small.png) [GET /entity1](#get_entity1)
* ![Done](statics/done_small.png) [GET /entity1/:id](#get_entity_element)

### PUT
* ![Done](statics/done_small.png) [PUT /entity1/:id](#put_entity1)

### DELETE
* ![Done](statics/done_small.png) [DELETE entity1/:id](#delete_entity1)

## Frontend
* ![Done](statics/done_small.png) <a href="https://name.domain.ext/seo-friendly-url" target="_blank">frontend Page</a>

## [Setting up a Development Environment](#dev_env)
---

<a name="post_entity1"></a>
[Back to Menu](#routes_menu)
### POST /entity1/ 
![Done](statics/done.png)
- 
Endpoint description here!!!

#### Parameters
| Param | Type | In | Required? | Description |
|-|-|-|-|-|
param1 | string | header | true | Param description here!!!
param2 | string | body | true | Param description here!!!
param3 | number | body | false | Param description here!!!

#### Sample Request
```
POST https://name.domain.ext/api/v1/entity1/

{
    "param1": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
    "param2": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
    "param3": 3599,
}
```

#### Sample Response
```
{
    "access_token": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
    "refresh_token": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
    "expires_in": 3599,
}
```
---

<a name="post_entity2"></a>
[Back to Menu](#routes_menu)
### POST /entity2/
![Done](statics/in_progress.png)
-
Endpoint description here!!!

#### Parameters
| Param | Type | In | Required? | Description |
|-|-|-|-|-|
param1 | string | header | true | Param description here!!!
param2 | string | body | true | Param description here!!!
param3 | number | body | false | Param description here!!!

#### Sample Request
```
POST https://name.domain.ext/api/v1/entity2/

{
    "param1": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
    "param2": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
    "param3": 3599,
}
```

#### Sample Response
```
{
    "param1": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
    "param2": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
    "param3": 3599,
}
```
---

<a name="post_entity3"></a>
[Back to Menu](#routes_menu)
### POST /entity3/
![Done](statics/not_started.png)
-
Endpoint description here!!!

#### Parameters
| Param | Type | In | Required? | Description |
|-|-|-|-|-|
param1 | string | header | true | Param description here!!!
param2 | string | body | true | Param description here!!!
param3 | number | body | false | Param description here!!!

#### Sample Request
```
POST https://name.domain.ext/api/v1/entity3/

{
    "param1": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
    "param2": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
    "param3": 3599,
}
```

#### Sample Response
```
{
    "param1": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
    "param2": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
    "param3": 3599,
}
```
---

<a name="get_entity1"></a>
[Back to Menu](#routes_menu)
### GET /entity1/
![Done](statics/done.png)
-
Endpoint description here!!!

#### Parameters
| Param | Type | In | Required? | Description |
|-|-|-|-|-|
param1 | string | header | true | Param description here!!!


#### Sample Request
```
GET https://name.domain.ext/service-NAME/api/v1/entity1/
```

#### Sample Response
```
[
    {
        "access_token": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
        "refresh_token": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
        "expires_in": 3599,
        "user_id": "2238917",
        "verifications": [ "payment" ],
        "token_type": "Bearer"
    },
    {
        "access_token": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
        "refresh_token": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
        "expires_in": 3599,
        "user_id": "2238917",
        "verifications": [ "payment" ],
        "token_type": "Bearer"
    }
]
```
---

<a name="get_entity_element"></a>
[Back to Menu](#routes_menu)
### GET /entity1/:id/
![Done](statics/done.png)
-
Endpoint description here!!!

#### Parameters
| Param | Type | In | Required? | Description |
|-|-|-|-|-|
param1 | string | header | true | Param description here!!!
param2 | string | uri | true | Param description here!!!
param3 | number | query | false | Param description here!!!

#### Sample Request
```
GET  https://name.domain.ext/service-NAME/api/v1/entity1/ff007356baf6c6b63bc17b7ba820e016ce8c6a51?param3=someValue
```

#### Sample Response
```
{
    "access_token": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
    "refresh_token": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
    "expires_in": 3599,
    "user_id": "2238917",
    "verifications": [ "payment" ],
    "token_type": "Bearer"
}
```
---

<a name="put_entity1"></a>
[Back to Menu](#routes_menu)
### PUT /entity1/:id
![Done](statics/done.png)
-
Endpoint description here!!!

#### Parameters
| Param | Type | In | Required? | Description |
|-|-|-|-|-|
param1 | string | header | true | Param description here!!!
param2 | string | uri | true | Param description here!!!
param3 | number | body | true | Param description here!!!

#### Sample Request
```
PUT https://name.domain.ext/service-NAME/api/v1/entity1/ff007356baf6c6b63bc17b7ba820e016ce8c6a51

{
    "param3": 3599
}
```

#### Sample Response
```
{
    "access_token": "ff007356baf6c6b63bc17b7ba820e016ce8c6a51",
    "refresh_token": "d248b2aefc0c2e74fdcbbdde34bcf84c1040a551",
    "expires_in": 3599,
    "user_id": "2238917",
    "verifications": [ "payment" ],
    "token_type": "Bearer"
}
```
---

<a name="delete_entity1"></a>
[Back to Menu](#routes_menu)
### DELETE /entity1/:id/
![Done](statics/done.png)
-
Endpoint description here!!!

#### Parameters
| Param | Type | In | Required? | Description |
|-|-|-|-|-|
param1 | string | header | true | Param description here!!!
param2 | string | uri | true | Param description here!!!

#### Sample Request
```
DELETE https://name.domain.ext/service-NAME/api/v1/entity1/ff007356baf6c6b63bc17b7ba820e016ce8c6a51
```

#### Sample Response
```
HTTP status: 204
```
---


<a name="dev_env"></a>
[Back to Menu](#routes_menu)
# Setting up a Development Environment

## Pre-requisites

* Provide `./node/config/keys.json` file
* Node v6.9.1
* Run `npm install` in the node directory
* MongoDB running (Locally or QA environments)

## Add keys.json file to the config directories
* Add the `keys.json` file to the `./node/config` directory.

## Starting server & hitting endpoints
* Be sure that you have provided `./node/config/keys.json` file.
* Navigate to the `node/` directory.
* Start the server with `npm start`.
* Hit desired endpoint and provide valid access token if any.

## running tests
* Be sure that you have provided `./node/config/keys.json` file.
* Navigate to the `node/` directory.
* Launch test suite with `npm test`.