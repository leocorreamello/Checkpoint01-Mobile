import "./styles/global.css";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  ActivityIndicator,
  Switch,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrar, setLembrar] = useState(true);
  const [rm, setRm] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <View className="flex-1 items-center justify-center bg-black px-4">
      <View className="w-full max-w-md mb-8 px-2">
        <Image
          source={require("./assets/logoFiap.png")}
          className="w-28 h-28 rounded-full border-2 border-pink-600 mb-6 shadow-lg self-center"
        />
        <Text className="text-3xl font-extrabold text-pink-600 tracking-wider text-left">Login APP</Text>
        <Text className="text-sm text-gray-300 mt-2 text-left">Bem-vindo de volta 👋</Text>
      </View>

      <View className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-6 mb-6">
        <View className="mb-4">
          <Text className="text-sm font-medium text-gray-200 mb-2 ml-1">RM</Text>
          <View className="relative justify-center">
            <TextInput
              className="w-full rounded-xl px-4 py-3.5 bg-black/40 border border-white/10 text-white text-base focus:border-pink-500"
              placeholder="Digite seu RM..."
              placeholderTextColor="#C4C4CC"
              keyboardType="numeric"
              value={rm}
              onChangeText={setRm}
            />
            {rm.length > 0 && (
              <TouchableOpacity
                onPress={() => setRm("")}
                className="absolute right-4"
              >
                <Text className="text-gray-400 font-bold text-lg">×</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View className="mb-3">
          <Text className="text-sm font-medium text-gray-200 mb-2 ml-1">Senha</Text>
          <View className="relative justify-center">
            <TextInput
              className="w-full rounded-xl px-4 py-3.5 pr-20 bg-black/40 border border-white/10 text-white text-base focus:border-pink-500"
              placeholder="Sua senha..."
              placeholderTextColor="#C4C4CC"
              secureTextEntry={!mostrarSenha}
              autoCapitalize="none"
              autoCorrect={false}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity
              onPress={() => setMostrarSenha(!mostrarSenha)}
              className="absolute right-4"
              accessibilityLabel={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
            >
              <Text className="text-pink-600 font-semibold text-sm">{mostrarSenha ? "Ocultar" : "Mostrar"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center justify-between mb-6 mt-2">
          <View className="flex-row items-center">
            <Switch
              trackColor={{ false: "#3F3F46", true: "#EC4899" }}
              thumbColor={"#FFFFFF"}
              onValueChange={setLembrar}
              value={lembrar}
            />
            <Text className="text-gray-300 text-sm ml-2" onPress={() => setLembrar(!lembrar)}>Lembrar-me</Text>
          </View>

          <TouchableOpacity activeOpacity={0.7}>
            <Text className="text-pink-600 text-sm font-semibold">Esqueci a senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          className={`w-full rounded-xl py-3.5 items-center justify-center shadow-lg shadow-pink-600/30 ${isLoading ? 'bg-pink-700' : 'bg-pink-600'}`}
          activeOpacity={0.8}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text className="text-white text-base font-bold tracking-wide">Entrar na Conta</Text>
          )}
        </TouchableOpacity>

      </View>

      <View className="flex-row mt-4">
        <Text className="text-gray-400 mr-2 text-sm">Ainda não tem conta?</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="text-pink-600 font-bold text-sm">Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}