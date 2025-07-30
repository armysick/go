#!/bin/bash
apt install -o Acquire::https::Verify-Peer=false -o Acquire::https::Verify-Host=false -y libicu-dev

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

$SCRIPT_DIR/myapp/TTM1LAN8J8
