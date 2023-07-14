---
description: >-
  OAuth2 позволяет разработчикам приложений создавать приложения, использующие
  аутентификацию и данные из Zimoxy API.
---

# OAuth2

### Общие ресурсы

Первым шагом в реализации OAuth2 является регистрация приложения разработчика и получение вашего секретного ключа. Большинство людей, которые будут внедрять OAuth2, захотят найти и использовать библиотеку на языке по своему выбору. Для тех, кто внедряет OAuth2 с нуля, см. подробности в `RFC 6749`. После того, как вы создадите свое приложение с помощью Zimoxy, убедитесь, что у вас есть свой `secret_key`.&#x20;

**URL-адреса OAuth2**

| URL                            | Описание        |
| ------------------------------ | --------------- |
| https://api.zimoxy.org/oauth2/ | URL авторизации |

### **Области действия OAuth2**

#### Регистрация пользователя

{% swagger method="post" path="register" baseUrl="https://api.zimoxy.org/oauth2/" summary="Регистрация пользователя" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="login" type="String" required="true" %}
Логин пользователя 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" type="String" required="true" %}
Пароль пользователя
{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" type="String" required="true" %}
Электронная почта пользователя
{% endswagger-parameter %}

{% swagger-parameter in="body" required="true" name="ip" type="String" %}
IP-адрес пользователя
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" type="String" required="true" %}
Ключ API
{% endswagger-parameter %}

{% swagger-response status="200: OK" description=" Успешная регистрация пользователя" %}
```
{'msg': 'Пользователь зарегистрирован', 'status': True}
```
{% endswagger-response %}

{% swagger-response status="302: Found" description=" Пользователь уже существует" %}
```
{'msg': 'Пользователь уже существует.', 'status': False}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Доступ запрещен (неправильный ключ API)" %}
```
{'msg': 'Доступ запрещен.', 'status': False}
```
{% endswagger-response %}

{% swagger-response status="423: Locked" description="Пользователь заблокирован" %}
```
{'msg': 'Пользователь заблокирован.', 'status': False}
```
{% endswagger-response %}
{% endswagger %}

#### Авторизация пользователя

{% swagger method="post" path="login" baseUrl="https://api.zimoxy.org/oauth2/" summary="Авторизация пользователя" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="login" type="String" required="true" %}
Логин пользователя 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" type="String" required="true" %}
Пароль пользователя
{% endswagger-parameter %}

{% swagger-parameter in="body" name="ip" type="String" required="false" %}
IP-адрес пользователя
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" type="String" required="true" %}
Ключ API
{% endswagger-parameter %}

{% swagger-response status="200: OK" description=" Успешная авторизация пользователя" %}
```
{'msg': 'Авторизация прошла успешно.', 'status': True}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Доступ запрещен (неправильный ключ API)" %}
```
{'msg': 'Доступ запрещен.', 'status': False}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Доступ запрещен (Логин или Пароль недействительны)" %}
```
{'msg': 'Доступ запрещен.', 'status': False}
```
{% endswagger-response %}

{% swagger-response status="423: Locked" description="Пользователь заблокирован" %}
```
{'msg': 'Пользователь заблокирован.', 'status': False}
```
{% endswagger-response %}
{% endswagger %}

### Примечания

* Для успешного выполнения операций регистрации и входа пользователя необходимо иметь действительный ключ API.
* Если ключ API не предоставлен в заголовке `Authorization`, то возвращается код ответа `403` и сообщение об ошибке.
* В случае, если пользователь уже существует при регистрации, возвращается код ответа `302` и сообщение об ошибке.
* В случае, если пользователь заблокирован при регистрации или авторизации, возвращается код ответа `423` и сообщение об ошибке.
* В случае недействительных введенных данных при авторизации, возвращается код ответа `403` и сообщение об ошибке.

### Пример приминения

**Регистрация**

{% tabs %}
{% tab title="curl" %}
{% code overflow="wrap" lineNumbers="true" %}
```bash
curl -X POST -H "Content-Type: application/json" -H "Authorization: secret_key" -d '{
    "login": "test",
    "password": "testpassword",
    "email": "test@zimoxy.org",
    "ip": "Ваш IP адрес"
}' https://api.zimoxy.org/oauth2/register
```
{% endcode %}
{% endtab %}

{% tab title="Python" %}
```python
import requests

login = 'test'
email = 'test@zimoxy.org'
password = 'testpassword'

url = 'https://api.zimoxy.org/oauth2/register'
data = {
        'login': f'{login}',
        'password': f'{password}',
        'email': f'{email}',
        'ip': f'{request.remote_addr}'
} 
headers = {
        "Content-Type": "application/json",
        "Authorization": "secret_key",
}

response = requests.post(url, json=data,headers=headers)
data_json = response.json()

if data_json['status']:
        # Ваш код если Регистрация успешна
else:
        # Ваш код если Регистрация НЕ успешна

```
{% endtab %}

{% tab title="Java" %}
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class CurlToJava {
    public static void main(String[] args) throws IOException {
        String login = "test";
        String email = "test@zimoxy.org";
        String password = "testpassword";
        String ipAddress = "Ваш IP адрес";
        
        String url = "https://api.zimoxy.org/oauth2/register";
        String data = String.format("{\"login\": \"%s\", \"password\": \"%s\", \"email\": \"%s\", \"ip\": \"%s\"}",
                login, password, email, ipAddress);
        
        String secretKey = "secret_key"; // Секретный ключ
        
        URL apiUrl = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) apiUrl.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("Authorization", secretKey);
        connection.setDoOutput(true);
        
        try (OutputStream outputStream = connection.getOutputStream()) {
            byte[] input = data.getBytes("utf-8");
            outputStream.write(input, 0, input.length);
        }
        
        int responseCode = connection.getResponseCode();
        
        if (responseCode == HttpURLConnection.HTTP_OK) {
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();
            
            // Ваш код при успешной регистрации
        } else {
            // Ваш код при неуспешной регистрации
        }
        
        connection.disconnect();
    }
}

```
{% endtab %}
{% endtabs %}

**Авторизация**

`ip` - Необязательный параметр

{% tabs %}
{% tab title="curl" %}
{% code overflow="wrap" lineNumbers="true" %}
```bash
curl -X POST -H "Content-Type: application/json" -H "Authorization: secret_key" -d '{
    "login": "test",
    "password": "testpassword"
}' https://api.zimoxy.org/oauth2/login
```
{% endcode %}
{% endtab %}

{% tab title="Python" %}
```python
import requests

login = 'test'
password = 'testpassword'

url = 'https://api.zimoxy.org/oauth2/login'
data = {
        'login': f'{login}',
        'password': f'{password}'
} 
headers = {
        "Content-Type": "application/json",
        "Authorization": "secret_key",
}

response = requests.post(url, json=data,headers=headers)
data_json = response.json()

if data_json['status']:
        # Ваш код если Регистрация успешна
else:
        # Ваш код если Регистрация НЕ успешна
```
{% endtab %}

{% tab title="Java" %}
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class AuthenticationExample {
    public static void main(String[] args) throws IOException {
        String login = "test";
        String password = "testpassword";

        String url = "https://api.zimoxy.org/oauth2/login";
        String data = String.format("{\"login\": \"%s\", \"password\": \"%s\"}",
                login, password);

        String secretKey = "secret_key";

        URL apiUrl = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) apiUrl.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("Authorization", secretKey);
        connection.setDoOutput(true);

        try (OutputStream outputStream = connection.getOutputStream()) {
            byte[] input = data.getBytes("utf-8");
            outputStream.write(input, 0, input.length);
        }

        int responseCode = connection.getResponseCode();

        if (responseCode == HttpURLConnection.HTTP_OK) {
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Ваш код при успешной аутентификации
        } else {
            // Ваш код при неуспешной аутентификации
        }

        connection.disconnect();
    }
}

```
{% endtab %}
{% endtabs %}
