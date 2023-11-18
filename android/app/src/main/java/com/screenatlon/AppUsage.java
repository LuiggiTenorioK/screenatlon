package com.screenatlon;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.GregorianCalendar;
import java.util.Map;
import java.util.HashMap;

import android.content.Context;
import android.util.Log;
import com.facebook.react.bridge.Promise;
import android.app.usage.UsageEvents;
import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import java.util.List;

public class AppUsage extends ReactContextBaseJavaModule {

    Context context;
    AppUsage(ReactApplicationContext context) {
        super(context);
        this.context = context.getApplicationContext();
    }

    public static final String TAG = AppUsage.class.getSimpleName();

    @Override
    public String getName() {
        return "AppUsage";
    }

    @ReactMethod
    public void getAppUsage(String name, String location, Promise promise) {
        try {
            long startTime = new GregorianCalendar(2021, 01, 16).getTimeInMillis();
            long endTime = new GregorianCalendar(2023, 12, 18).getTimeInMillis();

            UsageStatsManager usageStatsManager = (UsageStatsManager)context.getSystemService(Context.USAGE_STATS_SERVICE);
            List<UsageStats> queryUsageStats = usageStatsManager.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, startTime, endTime);

            Log.d(TAG, "Holaaaaaaa" + queryUsageStats );

            for (UsageStats us : queryUsageStats) {
                Log.d(TAG, us.getPackageName() + " = " + us.getTotalTimeInForeground());
            }
            promise.resolve("Oie zhy");
        } catch(Exception e) {
            promise.reject("Oie noh ", e);
        }
    }
}