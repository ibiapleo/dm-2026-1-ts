import { useState } from "react";
import { Alert, Image, StyleSheet, TextInput, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../src/components/button";
import { globalStyles } from "../src/theme/globalStyles";

import News from "./pages/news";

type Screen = "home" | "news";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [name, setName] = useState("");
  const [seed, setSeed] = useState(() => Date.now());
  const [loadingImage, setLoadingImage] = useState(false);

  if (screen === "news") {
    return <News onBack={() => setScreen("home")} />;
  }

  async function refreshImage() {
    const newSeed = Date.now();
    const uri = `https://picsum.photos/seed/${newSeed}/${styles.photo.width}/${styles.photo.height}`;
    try {
        setLoadingImage(true);
        await Image.prefetch(uri);
        setSeed(newSeed);
    } catch {
        setSeed(newSeed);
    } finally {
        setLoadingImage(false);
    }
  }

  function handleGoToNews() {
    if (!name || name.trim().length === 0) {
      Alert.alert("Campo obrigatório", "Por favor, preencha com o seu nome completo.");
      return;
    }

    Alert.alert("Dados enviados com sucesso!");
    setScreen("news");
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        {loadingImage ? (
            <ActivityIndicator size="large" color="#2563eb" style={styles.loadingContainer} />
        ) : (
            <Image
              style={styles.photo}
              source={{ uri: `https://picsum.photos/seed/${seed}/${200}/${200}` }}
              resizeMode="cover"
            />
        )}
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor={styles.textColor.color}
          value={name}
          onChangeText={setName}
          maxLength={60}
          accessibilityLabel="Nome completo"
        />
        <Button title="Salvar Perfil" onPress={() => handleGoToNews()} />
        <Button title="Trocar Foto" onPress={() => refreshImage()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20,
    borderColor: "#ffffffff",
    borderWidth: 3,
  },
  input: {
    width: "75%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  textColor: {
    color: "#0f172a",
  },
  loadingContainer: {
    marginBottom: 150,
  },
});
