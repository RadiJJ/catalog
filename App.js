import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

/**
 * РЕАЛИЗАЦИЯ ГИБРИДНОГО МОБИЛЬНОГО ПРИЛОЖЕНИЯ КАТАЛОГА ОДЕЖДЫ (EXPO GO / SNACK)
 * Лабораторная работа: 6_expoGitHub.docx
 * 
 * Укажите URL опубликованного сайта на GitHub Pages в переменной GITHUB_PAGES_URL.
 */
const GITHUB_PAGES_URL = 'https://YOUR_USERNAME.github.io/clothing-catalog/';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F3ED" />
      <SafeAreaView style={styles.container}>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorIcon}>⚠️</Text>
            <Text style={styles.errorTitle}>Ошибка загрузки каталога</Text>
            <Text style={styles.errorText}>
              Не удалось открыть веб-приложение. Убедитесь, что сайт опубликован на GitHub Pages и устройство подключено к сети.
            </Text>
            <TouchableOpacity 
              style={styles.retryButton} 
              onPress={() => setError(false)}
            >
              <Text style={styles.retryButtonText}>Повторить попытку</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <WebView
            source={{ uri: GITHUB_PAGES_URL }}
            style={styles.webview}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onError={() => setError(true)}
            renderLoading={() => (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#C47847" />
                <Text style={styles.loadingText}>Загрузка каталога одежды...</Text>
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F3ED',
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F3ED',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#7A726B',
    fontWeight: '500',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F7F3ED',
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C2623',
    marginBottom: 8,
  },
  errorText: {
    fontSize: 14,
    color: '#7A726B',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  retryButton: {
    backgroundColor: '#2C2623',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
