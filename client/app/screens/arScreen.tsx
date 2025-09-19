// app/screens/ARScreen.tsx
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  navigation?: any;
};

export default function ARScreen({ navigation }: Props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <View style={styles.container}>
      {/* Placeholder content for Expo Go */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>
          AR functionality is only available in a custom dev client.
        </Text>
        <Text style={styles.placeholderSubText}>
          Please build a custom client using `expo run:ios` or `expo run:android` to test AR features.
        </Text>
      </View>

      {/* Overlay buttons */}
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => setShowInfo(true)}
        >
          <Text style={{ color: "#fff" }}>How to use AR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.infoButton, { marginTop: 8 }]}
          onPress={() => navigation?.navigate?.("Home")}
        >
          <Text style={{ color: "#fff" }}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Info Modal */}
      <Modal visible={showInfo} animationType="slide" transparent>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Monastery360 AR</Text>
          <Text style={styles.modalDesc}>
            AR features require a custom development client. You can tap “Back” to return to Home.
          </Text>
          <TouchableOpacity
            onPress={() => setShowInfo(false)}
            style={styles.modalClose}
          >
            <Text style={{ color: "#fff" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#111",
  },
  placeholderText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 12,
  },
  placeholderSubText: {
    color: "#ddd",
    fontSize: 14,
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 40,
    right: 16,
    alignItems: "flex-end",
  },
  infoButton: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
    borderRadius: 8,
  },
  modal: {
    marginTop: "auto",
    backgroundColor: "#111",
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalTitle: { color: "#fff", fontSize: 18, marginBottom: 8 },
  modalDesc: { color: "#ddd", fontSize: 14 },
  modalClose: {
    marginTop: 12,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});
