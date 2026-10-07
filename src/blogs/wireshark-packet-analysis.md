---
title: Wireshark Packet Analysis for Beginners
date: 2026-06-10
category: Networking
tags: [Wireshark, Packet Analysis, Network Security]
excerpt: Learn how to capture, filter, and interpret network traffic in Wireshark to spot suspicious activity.
---

## Why Look at Packets at All?

Logs tell you what a system *thinks* happened. Packets tell you what *actually* happened on the wire. When something doesn't add up — a service acting strange, unexplained traffic, a suspected compromise — packet capture is where you go for ground truth.

## Capturing Traffic

Start a capture on the interface facing the traffic you care about. On a home lab setup, that's usually your primary network adapter. Wireshark's capture filters (applied before capture starts) help keep capture files manageable:

```
host 192.168.1.10 and port 443
```

## Display Filters vs Capture Filters

This trips up a lot of beginners. Capture filters use BPF syntax and decide what gets recorded. Display filters use Wireshark's own syntax and only affect what you *see* from an already-captured file. A few display filters I use constantly:

```
ip.addr == 192.168.1.10
tcp.port == 445
http.request
dns
tcp.flags.syn == 1 && tcp.flags.ack == 0
```

That last one isolates SYN packets without the ACK flag — useful for spotting SYN scan traffic.

## Following a TCP Stream

Right-clicking a packet and choosing **Follow → TCP Stream** reconstructs the full conversation between two hosts, which is often the fastest way to understand what an HTTP request/response pair, or a plaintext protocol exchange, actually contained.

## Spotting Suspicious Patterns

A few patterns worth watching for during analysis:

- **Repeated SYN packets with no completed handshake** — often indicates a port scan
- **Unusual DNS queries** to strange or randomly-generated-looking domains — a common sign of C2 beaconing
- **Cleartext protocols carrying credentials** (Telnet, FTP, unencrypted HTTP forms) — a finding worth flagging regardless of whether anything malicious happened
- **Large, regular, low-and-slow data transfers** to unfamiliar external IPs — worth cross-referencing against threat intel

## Practical Tip: Statistics Menu

Wireshark's **Statistics → Conversations** and **Statistics → Protocol Hierarchy** views are underused by beginners but incredibly useful for getting a fast overview of a large capture before diving into individual packets.

## Closing Thoughts

Packet analysis is a skill that improves mostly through repetition — the more captures you look at, the faster patterns start to jump out. Start with capturing your own normal traffic so you know what "boring" looks like; that makes anomalies much easier to spot later.
