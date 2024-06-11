import 'package:flutter/material.dart';
import 'package:swm_flutter_app/views/root/root_view.dart';
import 'package:swm_flutter_app/views/root/root_view_model.dart';
import 'package:swm_flutter_package/swm_flutter_package.dart';
import 'package:provider/provider.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await FPKit.initialize(
    url: "https://blwfenjwsiosdtaobcpu.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsd2Zlbmp3c2lvc2R0YW9iY3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MzIxOTAsImV4cCI6MjAzMzQwODE5MH0.aNtKIebW-EmCn5HGKBrOAgOhZZzQGBzNiG0dvMj3tAE",
  );
  runApp(const PackageSampleApp());
}

class PackageSampleApp extends StatelessWidget {
  const PackageSampleApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(),
      home: MultiProvider(
        providers: [
          ChangeNotifierProvider(
              create: (BuildContext content) => RootViewModel())
        ],
        child: const RootView(),
      ),
    );
  }
}
