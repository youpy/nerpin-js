define([], function() {
  return {
    'polyphony': {
      'id': 0,
      'min': 0,
      'max': 1
    },
    'unison_voices': {
      'id': 1,
      'min': 0,
      'max': 3
    },
    'unison_detune': {
      'id': 2,
      'min': 0,
      'max': 100
    },
    'portamento_enabled': {
      'id': 3,
      'min': 0,
      'max': 2
    },
    'portamento_type': {
      'id': 4,
      'min': 0,
      'max': 3
    },
    'portamento_time': {
      'id': 5,
      'min': 0,
      'max': 127
    },
    'pitchwheel_type': {
      'id': 6,
      'min': 0,
      'max': 1
    },
    'analog_drift': {
      'id': 7,
      'min': 0,
      'max': 100
    },
    'oscillator_sync_type': {
      'id': 8,
      'min': 0,
      'max': 4
    },
    'fm_amount': {
      'id': 9,
      'min': 0,
      'max': 1000
    },
    'fm_type': {
      'id': 10,
      'min': 0,
      'max': 5
    },
    'oscillator_1_waveform': {
      'id': 11,
      'min': 0,
      'max': 2
    },
    'oscillator_1_wave_shape': {
      'id': 12,
      'min': -100,
      'max': 100
    },
    'oscillator_1_octave': {
      'id': 13,
      'min': -3,
      'max': 3
    },
    'oscillator_1_transpose': {
      'id': 14,
      'min': -7,
      'max': 7
    },
    'oscillator_1_pitch': {
      'id': 15,
      'min': -999,
      'max': 999
    },
    'oscillator_1_pitchwheel_range': {
      'id': 16,
      'min': 0,
      'max': 12
    },
    'oscillator_2_waveform': {
      'id': 17,
      'min': 0,
      'max': 2
    },
    'oscillator_2_wave_shape': {
      'id': 18,
      'min': -100,
      'max': 100
    },
    'oscillator_2_octave': {
      'id': 19,
      'min': -3,
      'max': 3
    },
    'oscillator_2_transpose': {
      'id': 20,
      'min': -7,
      'max': 7
    },
    'oscillator_2_pitch': {
      'id': 21,
      'min': -999,
      'max': 999
    },
    'oscillator_2_pitchwheel_range': {
      'id': 22,
      'min': 0,
      'max': 12
    },
    'oscillator_3_waveform': {
      'id': 23,
      'min': 0,
      'max': 2
    },
    'oscillator_3_wave_shape': {
      'id': 24,
      'min': -100,
      'max': 100
    },
    'oscillator_3_octave': {
      'id': 25,
      'min': -3,
      'max': 3
    },
    'oscillator_3_transpose': {
      'id': 26,
      'min': -7,
      'max': 7
    },
    'oscillator_3_pitch': {
      'id': 27,
      'min': -999,
      'max': 999
    },
    'oscillator_3_pitchwheel_range': {
      'id': 28,
      'min': 0,
      'max': 12
    },
    'oscillator1_level': {
      'id': 29,
      'min': 0,
      'max': 100
    },
    'oscillator2_level': {
      'id': 30,
      'min': 0,
      'max': 100
    },
    'oscillator3_level': {
      'id': 31,
      'min': 0,
      'max': 100
    },
    'ringmodulation_level': {
      'id': 32,
      'min': 0,
      'max': 100
    },
    'noise_level': {
      'id': 33,
      'min': 0,
      'max': 100
    },
    'extin_level': {
      'id': 34,
      'min': 0,
      'max': 100
    },
    'oscillator1_balance': {
      'id': 35,
      'min': -50,
      'max': 50
    },
    'oscillator2_balance': {
      'id': 36,
      'min': -50,
      'max': 50
    },
    'oscillator3_balance': {
      'id': 37,
      'min': -50,
      'max': 50
    },
    'ringmodulation_balance': {
      'id': 38,
      'min': -50,
      'max': 50
    },
    'noise_balance': {
      'id': 39,
      'min': -50,
      'max': 50
    },
    'extin_balance': {
      'id': 40,
      'min': -50,
      'max': 50
    },
    'series_level': {
      'id': 41,
      'min': 0,
      'max': 100
    },
    'noise_type': {
      'id': 42,
      'min': 0,
      'max': 1
    },
    'filter_1_type': {
      'id': 43,
      'min': 0,
      'max': 20
    },
    'filter_1_frequency': {
      'id': 44,
      'min': 0,
      'max': 1023
    },
    'filter_1_resonance': {
      'id': 45,
      'min': 0,
      'max': 100
    },
    'filter_1_key_track': {
      'id': 46,
      'min': -100,
      'max': 200
    },
    'filter_1_envelope_amount': {
      'id': 47,
      'min': -100,
      'max': 100
    },
    'filter_2_relative_to_1': {
      'id': 48,
      'min': 0,
      'max': 1
    },
    'filter_2_type': {
      'id': 49,
      'min': 0,
      'max': 20
    },
    'filter_2_frequency_absolute': {
      'id': 50,
      'min': 0,
      'max': 1023
    },
    'filter_2_resonance': {
      'id': 51,
      'min': 0,
      'max': 100
    },
    'filter_2_key_track': {
      'id': 52,
      'min': -100,
      'max': 200
    },
    'filter_2_envelope_amount': {
      'id': 53,
      'min': -100,
      'max': 100
    },
    'filter_1_level': {
      'id': 54,
      'min': 0,
      'max': 100
    },
    'filter_2_level': {
      'id': 55,
      'min': 0,
      'max': 100
    },
    'preminusfilter_level': {
      'id': 56,
      'min': 0,
      'max': 100
    },
    'filter_1_pan': {
      'id': 57,
      'min': -100,
      'max': 100
    },
    'filter_2_pan': {
      'id': 58,
      'min': -100,
      'max': 100
    },
    'preminusfilter_pan': {
      'id': 59,
      'min': -100,
      'max': 100
    },
    'preminusfilter_source': {
      'id': 60,
      'min': 0,
      'max': 6
    },
    'filter_1_invert_phase': {
      'id': 61,
      'min': 0,
      'max': 1
    },
    'drive_type': {
      'id': 62,
      'min': 0,
      'max': 6
    },
    'drive_level': {
      'id': 63,
      'min': 0,
      'max': 100
    },
    'program_level': {
      'id': 64,
      'min': 0,
      'max': 100
    },
    'fx_mix': {
      'id': 65,
      'min': -50,
      'max': 50
    },
    'envelope_1_attack_time': {
      'id': 66,
      'min': 0,
      'max': 255
    },
    'envelope_1_attack_slope': {
      'id': 67,
      'min': 0,
      'max': 2
    },
    'envelope_1_decay_time': {
      'id': 68,
      'min': 0,
      'max': 255
    },
    'envelope_1_decay_slope': {
      'id': 69,
      'min': 0,
      'max': 2
    },
    'envelope_1_sustain_time': {
      'id': 70,
      'min': 0,
      'max': 255
    },
    'envelope_1_sustain_level': {
      'id': 71,
      'min': 0,
      'max': 100
    },
    'envelope_1_release_time': {
      'id': 72,
      'min': 0,
      'max': 255
    },
    'envelope_1_release_slope': {
      'id': 73,
      'min': 0,
      'max': 2
    },
    'envelope_1_velocity_to_envelope': {
      'id': 74,
      'min': 0,
      'max': 100
    },
    'envelope_1_reset_every_note': {
      'id': 75,
      'min': 0,
      'max': 1
    },
    'envelope_1_free_run': {
      'id': 76,
      'min': 0,
      'max': 1
    },
    'envelope_1_loop': {
      'id': 77,
      'min': 0,
      'max': 3
    },
    'envelope_1_sustain_pedal': {
      'id': 78,
      'min': 0,
      'max': 1
    },
    'envelope_2_attack_time': {
      'id': 79,
      'min': 0,
      'max': 255
    },
    'envelope_2_attack_slope': {
      'id': 80,
      'min': 0,
      'max': 2
    },
    'envelope_2_decay_time': {
      'id': 81,
      'min': 0,
      'max': 255
    },
    'envelope_2_decay_slope': {
      'id': 82,
      'min': 0,
      'max': 2
    },
    'envelope_2_sustain_time': {
      'id': 83,
      'min': 0,
      'max': 255
    },
    'envelope_2_sustain_level': {
      'id': 84,
      'min': -100,
      'max': 100
    },
    'envelope_2_release_time': {
      'id': 85,
      'min': 0,
      'max': 255
    },
    'envelope_2_release_slope': {
      'id': 86,
      'min': 0,
      'max': 2
    },
    'envelope_2_velocity_to_envelope': {
      'id': 87,
      'min': 0,
      'max': 100
    },
    'envelope_2_reset_every_note': {
      'id': 88,
      'min': 0,
      'max': 1
    },
    'envelope_2_free_run': {
      'id': 89,
      'min': 0,
      'max': 1
    },
    'envelope_2_loop': {
      'id': 90,
      'min': 0,
      'max': 3
    },
    'envelope_2_sustain_pedal': {
      'id': 91,
      'min': 0,
      'max': 1
    },
    'envelope_3_attack_time': {
      'id': 92,
      'min': 0,
      'max': 255
    },
    'envelope_3_attack_slope': {
      'id': 93,
      'min': 0,
      'max': 2
    },
    'envelope_3_decay_time': {
      'id': 94,
      'min': 0,
      'max': 255
    },
    'envelope_3_decay_slope': {
      'id': 95,
      'min': 0,
      'max': 2
    },
    'envelope_3_sustain_time': {
      'id': 96,
      'min': 0,
      'max': 255
    },
    'envelope_3_sustain_level': {
      'id': 97,
      'min': -100,
      'max': 100
    },
    'envelope_3_release_time': {
      'id': 98,
      'min': 0,
      'max': 255
    },
    'envelope_3_release_slope': {
      'id': 99,
      'min': 0,
      'max': 2
    },
    'envelope_3_velocity_to_envelope': {
      'id': 100,
      'min': 0,
      'max': 100
    },
    'envelope_3_reset_every_note': {
      'id': 101,
      'min': 0,
      'max': 1
    },
    'envelope_3_free_run': {
      'id': 102,
      'min': 0,
      'max': 1
    },
    'envelope_3_loop': {
      'id': 103,
      'min': 0,
      'max': 3
    },
    'envelope_3_sustain_pedal': {
      'id': 104,
      'min': 0,
      'max': 1
    },
    'lfo_1_tempo_sync': {
      'id': 105,
      'min': 0,
      'max': 1
    },
    'lfo_1_rate_free': {
      'id': 106,
      'min': 0,
      'max': 1023
    },
    'lfo_1_reset': {
      'id': 107,
      'min': 0,
      'max': 6
    },
    'm1_slider_influencelfo_1': {
      'id': 108,
      'min': 0,
      'max': 100
    },
    'lfo_2_tempo_sync': {
      'id': 109,
      'min': 0,
      'max': 1
    },
    'lfo_2_rate_free': {
      'id': 110,
      'min': 0,
      'max': 1023
    },
    'lfo_2_reset': {
      'id': 111,
      'min': 0,
      'max': 6
    },
    'm1_slider_influencelfo_2': {
      'id': 112,
      'min': 0,
      'max': 100
    },
    's_h_tempo_sync': {
      'id': 113,
      'min': 0,
      'max': 1
    },
    's_h_rate_free': {
      'id': 114,
      'min': 0,
      'max': 1023
    },
    's_h_reset': {
      'id': 115,
      'min': 0,
      'max': 4
    },
    's_h_input': {
      'id': 116,
      'min': 0,
      'max': 1
    },
    's_h_smoothing': {
      'id': 117,
      'min': 0,
      'max': 100
    },
    'tracking_input': {
      'id': 118,
      'min': 0,
      'max': 111
    },
    'tracking_preset': {
      'id': 119,
      'min': 0,
      'max': 9
    },
    'tracking_gridsize': {
      'id': 120,
      'min': 0,
      'max': 1
    },
    'tracking_point_minus16': {
      'id': 121,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus15': {
      'id': 122,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus14': {
      'id': 123,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus13': {
      'id': 124,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus12': {
      'id': 125,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus11': {
      'id': 126,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus10': {
      'id': 127,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus9': {
      'id': 128,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus8': {
      'id': 129,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus7': {
      'id': 130,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus6': {
      'id': 131,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus5': {
      'id': 132,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus4': {
      'id': 133,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus3': {
      'id': 134,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus2': {
      'id': 135,
      'min': -100,
      'max': 100
    },
    'tracking_point_minus1': {
      'id': 136,
      'min': -100,
      'max': 100
    },
    'tracking_point_0': {
      'id': 137,
      'min': -100,
      'max': 100
    },
    'tracking_point_1': {
      'id': 138,
      'min': -100,
      'max': 100
    },
    'tracking_point_2': {
      'id': 139,
      'min': -100,
      'max': 100
    },
    'tracking_point_3': {
      'id': 140,
      'min': -100,
      'max': 100
    },
    'tracking_point_4': {
      'id': 141,
      'min': -100,
      'max': 100
    },
    'tracking_point_5': {
      'id': 142,
      'min': -100,
      'max': 100
    },
    'tracking_point_6': {
      'id': 143,
      'min': -100,
      'max': 100
    },
    'tracking_point_7': {
      'id': 144,
      'min': -100,
      'max': 100
    },
    'tracking_point_8': {
      'id': 145,
      'min': -100,
      'max': 100
    },
    'tracking_point_9': {
      'id': 146,
      'min': -100,
      'max': 100
    },
    'tracking_point_10': {
      'id': 147,
      'min': -100,
      'max': 100
    },
    'tracking_point_11': {
      'id': 148,
      'min': -100,
      'max': 100
    },
    'tracking_point_12': {
      'id': 149,
      'min': -100,
      'max': 100
    },
    'tracking_point_13': {
      'id': 150,
      'min': -100,
      'max': 100
    },
    'tracking_point_14': {
      'id': 151,
      'min': -100,
      'max': 100
    },
    'tracking_point_15': {
      'id': 152,
      'min': -100,
      'max': 100
    },
    'tracking_point_16': {
      'id': 153,
      'min': -100,
      'max': 100
    },
    'program_category': {
      'id': 154,
      'min': 0,
      'max': 8
    },
    'knob_x': {
      'id': 155,
      'min': 0,
      'max': 161
    },
    'knob_y': {
      'id': 156,
      'min': 0,
      'max': 161
    },
    'knob_z': {
      'id': 157,
      'min': 0,
      'max': 161
    },
    'filter_2_frequency_relative': {
      'id': 158,
      'min': -400,
      'max': 400
    },
    'lfo_1_rate_follow_tempo': {
      'id': 159,
      'min': 0,
      'max': 24
    },
    'lfo_2_rate_follow_tempo': {
      'id': 160,
      'min': 0,
      'max': 24
    },
    's_h_rate_synced': {
      'id': 161,
      'min': 0,
      'max': 24
    },
    'patch_cable_1_source': {
      'id': 180,
      'min': 0,
      'max': 37
    },
    'patch_cable_1_destination': {
      'id': 181,
      'min': 0,
      'max': 77
    },
    'patch_cable_1_level': {
      'id': 182,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_1_offset': {
      'id': 183,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_2_source': {
      'id': 184,
      'min': 0,
      'max': 37
    },
    'patch_cable_2_destination': {
      'id': 185,
      'min': 0,
      'max': 77
    },
    'patch_cable_2_level': {
      'id': 186,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_2_offset': {
      'id': 187,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_3_source': {
      'id': 188,
      'min': 0,
      'max': 37
    },
    'patch_cable_3_destination': {
      'id': 189,
      'min': 0,
      'max': 77
    },
    'patch_cable_3_level': {
      'id': 190,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_3_offset': {
      'id': 191,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_4_source': {
      'id': 192,
      'min': 0,
      'max': 37
    },
    'patch_cable_4_destination': {
      'id': 193,
      'min': 0,
      'max': 77
    },
    'patch_cable_4_level': {
      'id': 194,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_4_offset': {
      'id': 195,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_5_source': {
      'id': 196,
      'min': 0,
      'max': 37
    },
    'patch_cable_5_destination': {
      'id': 197,
      'min': 0,
      'max': 77
    },
    'patch_cable_5_level': {
      'id': 198,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_5_offset': {
      'id': 199,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_6_source': {
      'id': 200,
      'min': 0,
      'max': 37
    },
    'patch_cable_6_destination': {
      'id': 201,
      'min': 0,
      'max': 77
    },
    'patch_cable_6_level': {
      'id': 202,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_6_offset': {
      'id': 203,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_7_source': {
      'id': 204,
      'min': 0,
      'max': 37
    },
    'patch_cable_7_destination': {
      'id': 205,
      'min': 0,
      'max': 77
    },
    'patch_cable_7_level': {
      'id': 206,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_7_offset': {
      'id': 207,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_8_source': {
      'id': 208,
      'min': 0,
      'max': 37
    },
    'patch_cable_8_destination': {
      'id': 209,
      'min': 0,
      'max': 77
    },
    'patch_cable_8_level': {
      'id': 210,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_8_offset': {
      'id': 211,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_9_source': {
      'id': 212,
      'min': 0,
      'max': 37
    },
    'patch_cable_9_destination': {
      'id': 213,
      'min': 0,
      'max': 77
    },
    'patch_cable_9_level': {
      'id': 214,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_9_offset': {
      'id': 215,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_10_source': {
      'id': 216,
      'min': 0,
      'max': 37
    },
    'patch_cable_10_destination': {
      'id': 217,
      'min': 0,
      'max': 77
    },
    'patch_cable_10_level': {
      'id': 218,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_10_offset': {
      'id': 219,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_11_source': {
      'id': 220,
      'min': 0,
      'max': 37
    },
    'patch_cable_11_destination': {
      'id': 221,
      'min': 0,
      'max': 77
    },
    'patch_cable_11_level': {
      'id': 222,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_11_offset': {
      'id': 223,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_12_source': {
      'id': 224,
      'min': 0,
      'max': 37
    },
    'patch_cable_12_destination': {
      'id': 225,
      'min': 0,
      'max': 77
    },
    'patch_cable_12_level': {
      'id': 226,
      'min': -1000,
      'max': 1000
    },
    'patch_cable_12_offset': {
      'id': 227,
      'min': -1000,
      'max': 1000
    },
    'fx_balance': {
      'id': 230,
      'min': -50,
      'max': 50
    },
    'fx_type_0': {
      'id': 231,
      'min': 0,
      'max': 6
    },
    'fx_param_a': {
      'id': 232,
      'min': -128,
      'max': 127
    },
    'fx_param_b': {
      'id': 233,
      'min': -128,
      'max': 127
    },
    'fx_param_c': {
      'id': 234,
      'min': -128,
      'max': 127
    },
    'fx_param_d': {
      'id': 235,
      'min': -128,
      'max': 127
    },
    'fx_param_e': {
      'id': 236,
      'min': -128,
      'max': 127
    },
    'fx_param_f': {
      'id': 237,
      'min': -128,
      'max': 127
    },
    'fx_param_g': {
      'id': 238,
      'min': -128,
      'max': 127
    },
    'fx_param_h_lfo_synced': {
      'id': 239,
      'min': 0,
      'max': 24
    },
    'fx2_type': {
      'id': 245,
      'min': 0,
      'max': 6
    },
    'fx2_param_a': {
      'id': 246,
      'min': 0,
      'max': 340
    },
    'fx2_param_b': {
      'id': 247,
      'min': 0,
      'max': 100
    },
    'fx2_param_c': {
      'id': 248,
      'min': 0,
      'max': 100
    },
    'fx2_param_d': {
      'id': 249,
      'min': 0,
      'max': 100
    },
    'fx_param_a_synced': {
      'id': 250,
      'min': 0,
      'max': 24
    },
    'arpeggiator_pattern': {
      'id': 512,
      'min': 0,
      'max': 31
    },
    'arpeggiator_pattern_multiplier': {
      'id': 513,
      'min': 0,
      'max': 6
    },
    'arpeggiator_length': {
      'id': 514,
      'min': 0,
      'max': 14
    },
    'arpeggiator_octave_range': {
      'id': 515,
      'min': 0,
      'max': 4
    },
    'arpeggiator_octave_span': {
      'id': 516,
      'min': 0,
      'max': 2
    },
    'arpeggiator_note_order': {
      'id': 517,
      'min': 0,
      'max': 5
    },
    'arpeggiator_enabled': {
      'id': 518,
      'min': 0,
      'max': 2
    },
    'arpeggiator_program_tempo': {
      'id': 519,
      'min': 500,
      'max': 2500
    }
  };
});

