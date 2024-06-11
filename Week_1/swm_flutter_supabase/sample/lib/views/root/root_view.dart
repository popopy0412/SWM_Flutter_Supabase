import 'package:flutter/material.dart';
import '../home/home_view.dart';
import '../home/home_view_model.dart';
import '../root/root_view_model.dart';
import '../signIn/sign_in_view.dart';
import '../signIn/sign_in_view_model.dart';
import 'package:provider/provider.dart';
import 'package:swm_flutter_package/entities/user.dart';

class RootView extends StatelessWidget {
  const RootView({super.key});

  @override
  Widget build(BuildContext context) {
    var viewModel = Provider.of<RootViewModel>(context);

    return StreamBuilder(
        stream: viewModel.getUserStream(),
        builder: (BuildContext context, AsyncSnapshot<FPUser?> snapshot) {
          if (snapshot.data != null) {
            return MultiProvider(
              providers: [
                ChangeNotifierProvider(create: (BuildContext content) => HomeViewModel())
              ],
              child: HomeView(),
            );
          } else {
            return MultiProvider(
              providers: [
                ChangeNotifierProvider(create: (BuildContext content) => SignInViewModel())
              ],
              child: SignInView(),
            );
          }
        }
    );
  }
}