# Real-Time Analytics Server

This server is built using Express.js and MongoDB as the database.

## Table of Contents

- [Introduction](#real_time_analytics)
- [Routes](#routes)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)

## Routes

- `POST /events`: Endpoint to submit events.
  - Example cURL command:
    ```bash
    curl --location 'https://real-time-analytics.onrender.com/events' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ab_test_id": "test5556",
    "ab_test_version": "v2",
    "amp_enabled": false,
    "campaign_id": "campaign789",
    "click_tracking": true,
    "customer_id": "customer321",
    "delv_method": "method2",
    "event_id": "event654",
    "friendly_from": "support@example.com",
    "geo_ip": {
        "country": "CA",
        "region": "ON",
        "city": "Toronto",
        "latitude": 43.70,
        "longitude": -79.42,
        "zip": "M5B",
        "postal_code": "M5B"
    },
    "injection_time": "2023-08-25T15:20:00Z",
    "initial_pixel": true,
    "ip_address": "192.168.2.1",
    "ip_pool": "pool456",
    "mailbox_provider": "Outlook",
    "mailbox_provider_region": "US",
    "message_id": "message987",
    "msg_from": "noreply@example.com",
    "msg_size": "8KB",
    "num_retries": "2",
    "open_tracking": true,
    "queue_time": "3s",
    "rcpt_meta": {
        "customKey": "customValue2"
    },
    "rcpt_tags": ["tag3", "tag4"],
    "rcpt_to": "user@example.com",
    "rcpt_hash": "hash456",
    "raw_rcpt_to": "user@example.com",
    "rcpt_type": "primary",
    "recipient_domain": "example.com",
    "routing_domain": "example.com",
    "scheduled_time": "2023-08-26T10:15:00Z",
    "sending_ip": "192.168.2.2",
    "subaccount_id": "subaccount123",
    "subject": "Another Example",
    "template_id": "template456",
    "template_version": "v1",
    "timestamp": "2023-08-25T16:30:00Z",
    "transactional": "no",
    "transmission_id": "transmission321",
    "type": "email",
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    "user_agent_parsed": {
        "agent_family": "Mozilla",
        "device_brand": "Unknown",
        "device_family": "Desktop",
        "os_family": "Mac OS X",
        "os_version": "10.15.7",
        "is_mobile": false,
        "is_proxy": false,
        "is_prefetched": false
    }
}
'
    ```

- `GET /metrics`: Endpoint to retrieve metrics.
  - Example cURL command:
    ```bash
    curl --location 'https://real-time-analytics.onrender.com/metrics'
    ```

## Dependencies

This project uses the following dependencies:

- `body-parser`: ^1.20.1
- `cookie-parser`: ^1.4.6
- `cors`: ^2.8.5
- `dotenv`: ^16.0.3
- `express`: ^4.18.2
- `express-fileupload`: ^1.4.0
- `express-mongo-sanitize`: ^2.2.0
- `express-rate-limit`: ^6.7.0
- `helmet`: ^6.0.1
- `hpp`: ^0.2.3
- `mongoose`: ^6.9.1
- `morgan`: ^1.10.0
- `xss-clean`: ^0.1.1

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/AD17YAKR/real_time_analytics.git


2. Install the dependencies:
bash
Copy code
npm install
Create a .env file using the provided script:

3. bash
Copy code
npm run create-env
Start the server:

4. bash
Copy code
npm start