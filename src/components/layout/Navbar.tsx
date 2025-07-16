@@ .. @@
 import { useState, useEffect } from "react";
 import { Link, useLocation } from "react-router-dom";
 import { Button } from "@/components/ui/button";
+import Logo from "@/components/ui/logo";
 import { Menu, X, User, LogOut } from "lucide-react";
 import {
   DropdownMenu,
@@ .. @@
           {/* Logo */}
-          <Link to="/" className="flex items-center space-x-2">
-            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
-              <span className="text-white font-bold text-sm">S</span>
-            </div>
-            <span className="text-xl font-bold text-foreground">
-              Sisuni Tech
-            </span>
+          <Link to="/">
+            <Logo size="md" showText={true} />
           </Link>