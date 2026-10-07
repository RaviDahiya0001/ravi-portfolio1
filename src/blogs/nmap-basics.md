---
title: Nmap Basics — A Practical Guide to Network Scanning
date: 2026-06-01
category: Networking
tags: [Nmap, Network Security, Scanning]
excerpt: A hands-on introduction to Nmap covering host discovery, port scanning, and service detection for real-world security assessments.
---

## Why Nmap Matters

Nmap (Network Mapper) is one of the first tools any security analyst learns, and for good reason — it answers the most basic question in security: **what is actually running on this network?** Before you can assess vulnerabilities, you need to know which hosts are alive, which ports are open, and which services are listening behind them.

## Host Discovery

Before scanning ports, it helps to figure out which hosts on a network are actually up:

```bash
nmap -sn 192.168.1.0/24
```

The `-sn` flag disables port scanning and just performs a ping sweep, which is useful for quickly mapping a subnet without generating a lot of noise.

## Basic Port Scanning

The most common scan type is a TCP SYN scan, which is fast and doesn't complete the full TCP handshake:

```bash
nmap -sS 192.168.1.10
```

For a full connect scan (useful when you don't have raw socket privileges):

```bash
nmap -sT 192.168.1.10
```

## Service and Version Detection

Knowing a port is open isn't enough — you need to know what's running on it:

```bash
nmap -sV 192.168.1.10
```

This attempts to identify the service and its version, which is essential when cross-referencing against known CVEs later.

## Vulnerability Scripts

Nmap's scripting engine (NSE) can go a step further and check for known vulnerabilities directly:

```bash
nmap -sV --script=vuln 192.168.1.10
```

This is often the first command I run when starting a vulnerability assessment — it gives a quick sense of low-hanging fruit before diving into manual testing.

## A Practical Workflow

1. `nmap -sn` to discover live hosts
2. `nmap -sS -p-` to scan all 65535 ports on interesting hosts
3. `nmap -sV -sC` on discovered open ports for service fingerprinting and default scripts
4. `nmap --script=vuln` for a fast vulnerability sweep

## Closing Thoughts

Nmap is deceptively simple on the surface but has enormous depth once you start combining scan types, timing templates, and NSE scripts. Treat it as the starting point of reconnaissance, not the final answer — always validate findings before acting on them.
