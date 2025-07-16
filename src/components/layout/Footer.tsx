@@ .. @@
 import { Link } from "react-router-dom";
+import Logo from "@/components/ui/logo";
 import { Mail, Phone } from "lucide-react";
 
@@ .. @@
           <div className="col-span-1 md:col-span-2">
-            <div className="flex items-center space-x-2 mb-4">
-              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
-                <span className="text-white font-bold text-sm">S</span>
-              </div>
-              <span className="text-xl font-bold">Sisuni Tech</span>
-            </div>
+            <div className="mb-4">
+              <Logo size="md" showText={true} className="text-white" />
+            </div>