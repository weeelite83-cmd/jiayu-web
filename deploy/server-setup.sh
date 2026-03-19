#!/bin/bash

# ============================================================
# 嘉钰不锈钢网站服务器部署脚本
# 服务器：阿里云ECS Ubuntu 22.04
# 域名：jayu-stainless.com
# ============================================================

set -e

echo "=========================================="
echo "开始部署嘉钰不锈钢网站..."
echo "=========================================="

# 1. 更新系统
echo "[1/6] 更新系统包..."
apt update && apt upgrade -y

# 2. 安装Node.js 20.x
echo "[2/6] 安装Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 验证安装
node --version
npm --version

# 3. 安装pnpm
echo "[3/6] 安装pnpm..."
npm install -g pnpm

# 4. 安装PM2（进程管理）
echo "[4/6] 安装PM2..."
npm install -g pm2

# 5. 安装Nginx
echo "[5/6] 安装Nginx..."
apt install -y nginx

# 6. 创建项目目录
echo "[6/6] 创建项目目录..."
mkdir -p /var/www/jiayu-web

echo "=========================================="
echo "环境安装完成！"
echo "Node.js: $(node --version)"
echo "pnpm: $(pnpm --version)"
echo "=========================================="
echo ""
echo "下一步：上传项目代码"
